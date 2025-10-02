import Link from 'next/link'
import { notFound } from 'next/navigation'
import { optimizers } from '@/data/optimizers'
import OptimizerDetailClient from './OptimizerDetailClient'

interface Props {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return optimizers.map((optimizer) => ({
    id: optimizer.id,
  }))
}

export default function OptimizerDetailPage({ params }: Props) {
  const optimizer = optimizers.find(opt => opt.id === params.id)

  if (!optimizer) {
    notFound()
  }

  return <OptimizerDetailClient optimizer={optimizer} />
}
