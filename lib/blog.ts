import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  coverImage: string
  readingTime: string
  content: string
  excerpt: string
}

export interface BlogPostMeta extends Omit<BlogPost, 'content'> {}

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }
}

export function getAllPosts(): BlogPostMeta[] {
  ensureBlogDir()

  const fileNames = fs.readdirSync(BLOG_DIR)
  const posts = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace('.mdx', '')
      return getPostMetaBySlug(slug)
    })
    .filter(Boolean) as BlogPostMeta[]

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostMetaBySlug(slug: string): BlogPostMeta | null {
  try {
    const fullPath = path.join(BLOG_DIR, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Reekko',
      category: data.category || 'Growth Marketing',
      tags: data.tags || [],
      coverImage: data.coverImage || '/images/blog/default.jpg',
      readingTime: stats.text,
      excerpt: data.excerpt || content.slice(0, 200).replace(/[#*`]/g, '') + '...',
    }
  } catch {
    return null
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(BLOG_DIR, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Reekko',
      category: data.category || 'Growth Marketing',
      tags: data.tags || [],
      coverImage: data.coverImage || '/images/blog/default.jpg',
      readingTime: stats.text,
      content,
      excerpt: data.excerpt || content.slice(0, 200).replace(/[#*`]/g, '') + '...',
    }
  } catch {
    return null
  }
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = new Set(posts.map((post) => post.category))
  return Array.from(categories)
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set(posts.flatMap((post) => post.tags))
  return Array.from(tags)
}
