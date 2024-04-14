import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explique os conceitos técnicos',
    message: `O quê é "serverless function"?`
  },
  {
    heading: 'Resuma um artigo',
    message: 'Resuma o seguinte arquivo para uma criança ler: \n'
  },
  {
    heading: 'Escreva um email',
    message: `Escreva um email para meu chefe sobre o seguinte: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Bem vindo ao WKLR, um Chatbot totalmente alimentado por I.A 
        </h1>
        <p className="leading-normal text-muted-foreground">
          Ele usa{' '}
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
          Componentes React
          </ExternalLink>{' '}
          para combinar texto com I.a generativa.
          Está i.a é sincronizada por meio de um SDK para que o modelo esteja ciente de suas interações
          à medida que acontecem.
        </p>
      </div>
    </div>
  )
}
