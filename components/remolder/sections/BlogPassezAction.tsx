import { getAllPosts, getAllCategories } from '@/lib/blog'
import BlogFilter from '@/components/blog/BlogFilter'
import NewsletterSection from '@/components/ui/NewsletterSection'
import { ArrowRight, BookOpen } from 'lucide-react'
import Button from '@/components/ui/Button'

export interface PassezActionProps {
  emptyStateTitle?: string
  emptyStateSubtitle?: string
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonLabel?: string
  ctaButtonHref?: string
}

const PASSEZACTION_DEFAULTS = {
  emptyStateTitle: 'Aucun article pour le moment.',
  emptyStateSubtitle: 'Revenez bientôt !',
  ctaTitle: 'Passez à l\'action',
  ctaDescription: 'La théorie c\'est bien, la mise en pratique c\'est mieux. Réservez un appel pour discuter de votre acquisition.',
  ctaButtonLabel: 'Réserver un appel stratégique',
  ctaButtonHref: '/contact'
}

export default function PassezAction(props: PassezActionProps = {}) {
  const { emptyStateTitle, emptyStateSubtitle, ctaTitle, ctaDescription, ctaButtonLabel, ctaButtonHref } = { ...PASSEZACTION_DEFAULTS, ...props }
  
  const posts = getAllPosts()
  const categories = getAllCategories()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-zinc-500 text-lg">{emptyStateTitle}</p>
                <p className="text-zinc-600 text-sm mt-2">{emptyStateSubtitle}</p>
              </div>
            ) : (
              <BlogFilter posts={posts} categories={categories} />
            )}
    
            {/* Newsletter */}
            <div className="mt-16">
              <NewsletterSection />
            </div>
    
            {/* CTA */}
            <div className="mt-10 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-10 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                {ctaTitle}
              </h2>
              <p className="text-zinc-400 mb-7 max-w-md mx-auto">
                {ctaDescription}
              </p>
              <Button href={ctaButtonHref}>
                {ctaButtonLabel}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
  )
}