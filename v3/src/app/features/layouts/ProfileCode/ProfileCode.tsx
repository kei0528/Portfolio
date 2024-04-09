import { type JSX } from 'react'

import { CodeBlockItem, CodeBlockRoot } from '../../uis/CodeBlock'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../uis/Tooltip'
import { CodeBlockTooltipContent } from '../../uis/CodeBlock/CodeBlockTooltipContent'

export const ProfileCode = (): JSX.Element => {
  return (
    <TooltipProvider delayDuration={400}>
      <CodeBlockRoot>
        {/* 1. line */}
        <CodeBlockItem color='purple'>if </CodeBlockItem>
        <CodeBlockItem color='orange-light'>{'('}</CodeBlockItem>
        <Tooltip>
          <TooltipTrigger>
            <CodeBlockItem color='yellow'>isDay</CodeBlockItem>
            <CodeBlockItem color='purple'>{'()'}</CodeBlockItem>
          </TooltipTrigger>
          <TooltipContent>
            <CodeBlockTooltipContent
              code={
                <>
                  <CodeBlockItem color='blue-dark'>function </CodeBlockItem>
                  <CodeBlockItem color='yellow'>isDay</CodeBlockItem>
                  <CodeBlockItem color='base'>(): </CodeBlockItem>
                  <CodeBlockItem color='green-light'>boolean</CodeBlockItem>
                </>
              }
              description='Checks if the current time is during the day'
            />
          </TooltipContent>
        </Tooltip>
        <CodeBlockItem color='orange-light'>{') {'}</CodeBlockItem>
        <br />

        {/* 2. Line */}
        <CodeBlockItem color='blue-light'>{'  '}const </CodeBlockItem>
        <Tooltip>
          <TooltipTrigger>
            <CodeBlockItem color='blue-dark'>fishes </CodeBlockItem>
          </TooltipTrigger>
          <TooltipContent>
            <CodeBlockTooltipContent
              code={
                <>
                  <CodeBlockItem color='blue-light'>const </CodeBlockItem>
                  <CodeBlockItem color='blue-dark'>fishes</CodeBlockItem>
                  <CodeBlockItem color='base'>: </CodeBlockItem>
                  <CodeBlockItem color='green-light'>Fish </CodeBlockItem>
                  <CodeBlockItem color='base'>[]</CodeBlockItem>
                </>
              }
            />
          </TooltipContent>
        </Tooltip>
        <CodeBlockItem color='base'>= </CodeBlockItem>
        <Tooltip>
          <TooltipTrigger>
            <CodeBlockItem color='yellow'>getFishes</CodeBlockItem>
            <CodeBlockItem color='purple'>()</CodeBlockItem>
          </TooltipTrigger>
          <TooltipContent>
            <CodeBlockTooltipContent
              code={
                <>
                  <CodeBlockItem color='blue-dark'>function </CodeBlockItem>
                  <CodeBlockItem color='yellow'>getFishes</CodeBlockItem>
                  <CodeBlockItem color='base'>(): </CodeBlockItem>
                  <CodeBlockItem color='green-light'>Array</CodeBlockItem>
                  <CodeBlockItem color='base'>{'<'}</CodeBlockItem>
                  <CodeBlockItem color='green-light'>Fish</CodeBlockItem>
                  <CodeBlockItem color='base'>{'>'}</CodeBlockItem>
                </>
              }
              description='Retrieves a list of fishes that Keisuke caught'
            />
          </TooltipContent>
        </Tooltip>
        <br />

        {/* 3. Line */}
        <CodeBlockItem color='blue-light'>{'  '}const </CodeBlockItem>
        <Tooltip>
          <TooltipTrigger>
            <CodeBlockItem color='blue-dark'>countFishes </CodeBlockItem>
          </TooltipTrigger>
          <TooltipContent>
            <CodeBlockTooltipContent
              code={
                <>
                  <CodeBlockItem color='blue-light'>const </CodeBlockItem>
                  <CodeBlockItem color='blue-dark'>countFishes</CodeBlockItem>
                  <CodeBlockItem color='base'>: </CodeBlockItem>
                  <CodeBlockItem color='green-light'>number </CodeBlockItem>
                </>
              }
            />
          </TooltipContent>
        </Tooltip>
        <CodeBlockItem color='base'>= </CodeBlockItem>
        <CodeBlockItem color='blue-dark'>fishes</CodeBlockItem>
        <CodeBlockItem color='base'>.</CodeBlockItem>
        <CodeBlockItem color='blue-light'>length</CodeBlockItem>
        <br />

        {/* 4. Line */}
        <CodeBlockItem color='blue-light'>{'  '}console</CodeBlockItem>
        <CodeBlockItem color='base'>.</CodeBlockItem>
        <CodeBlockItem color='yellow'>log</CodeBlockItem>
        <CodeBlockItem color='purple'>{'('}</CodeBlockItem>
        <CodeBlockItem color='blue-dark'>countFishes</CodeBlockItem>
        <CodeBlockItem color='purple'>{')'}</CodeBlockItem>
        <CodeBlockItem color='green-dark'>{' // '}0</CodeBlockItem>
        <br />

        {/* 5. Line */}
        <CodeBlockItem color='orange-light'>{'}'}</CodeBlockItem>
        <CodeBlockItem color='purple'> else </CodeBlockItem>
        <CodeBlockItem color='orange-light'>{'{'}</CodeBlockItem>
        <br />

        {/* 6. Line */}
        <CodeBlockItem color='blue-dark'>{'  '}const </CodeBlockItem>
        <CodeBlockItem color='blue-light'>coffee </CodeBlockItem>
        <CodeBlockItem color='base'>= </CodeBlockItem>
        <CodeBlockItem color='purple'>await </CodeBlockItem>
        <Tooltip>
          <TooltipTrigger>
            <CodeBlockItem color='yellow'>brewCoffee</CodeBlockItem>
            <CodeBlockItem color='purple'>{'('}</CodeBlockItem>
            <CodeBlockItem color='orange-dark'>{"'Filter'"}</CodeBlockItem>
            <CodeBlockItem color='purple'>{')'}</CodeBlockItem>
          </TooltipTrigger>
          <TooltipContent>
            <CodeBlockTooltipContent
              code={
                <>
                  <CodeBlockItem color='blue-dark'>function </CodeBlockItem>
                  <CodeBlockItem color='yellow'>brewCoffee</CodeBlockItem>
                  <CodeBlockItem color='base'>{'('}</CodeBlockItem>
                  <CodeBlockItem color='blue-light'>brewMethod</CodeBlockItem>
                  <CodeBlockItem color='base'>:</CodeBlockItem>
                  <CodeBlockItem color='green-light'>BrewMethod</CodeBlockItem>
                  <CodeBlockItem color='base'>{'):'} </CodeBlockItem>
                  <CodeBlockItem color='green-light'>Promise</CodeBlockItem>
                  <CodeBlockItem color='base'>{'<'}</CodeBlockItem>
                  <CodeBlockItem color='green-light'>Coffee</CodeBlockItem>
                  <CodeBlockItem color='base'>{'>'}</CodeBlockItem>
                </>
              }
              description='Brews a cup of coffee based on specified brew method'
            />
          </TooltipContent>
        </Tooltip>
        <br />

        {/* 7. Line */}
        <Tooltip>
          <TooltipTrigger>
            <CodeBlockItem color='yellow'>{'  '}drink</CodeBlockItem>
            <CodeBlockItem color='purple'>{'('}</CodeBlockItem>
            <CodeBlockItem color='blue-dark'>coffee</CodeBlockItem>
            <CodeBlockItem color='purple'>{')'}</CodeBlockItem>
          </TooltipTrigger>
          <TooltipContent>
            <CodeBlockTooltipContent
              code={
                <>
                  <CodeBlockItem color='blue-dark'>function </CodeBlockItem>
                  <CodeBlockItem color='yellow'>drink</CodeBlockItem>
                  <CodeBlockItem color='base'>{'('}</CodeBlockItem>
                  <CodeBlockItem color='blue-light'>beverage</CodeBlockItem>
                  <CodeBlockItem color='base'>: </CodeBlockItem>
                  <CodeBlockItem color='green-light'>Beverage</CodeBlockItem>
                  <CodeBlockItem color='base'>{')'}</CodeBlockItem>
                  <CodeBlockItem color='base'>: </CodeBlockItem>
                  <CodeBlockItem color='green-light'>void</CodeBlockItem>
                </>
              }
              description='Drinks specified beverage'
            />
          </TooltipContent>
        </Tooltip>
        <br />

        {/* 8. Line */}
        <Tooltip>
          <TooltipTrigger>
            <CodeBlockItem color='yellow'>{'  '}writeCode</CodeBlockItem>
            <CodeBlockItem color='purple'>()</CodeBlockItem>
          </TooltipTrigger>
          <TooltipContent>
            <CodeBlockTooltipContent
              code={
                <>
                  <CodeBlockItem color='blue-dark'>function </CodeBlockItem>
                  <CodeBlockItem color='yellow'>writeCode</CodeBlockItem>
                  <CodeBlockItem color='base'>(): </CodeBlockItem>
                  <CodeBlockItem color='green-light'>void</CodeBlockItem>
                </>
              }
              description='Writes some really good code'
            />
          </TooltipContent>
        </Tooltip>
        <br />

        {/* 9. Line */}
        <CodeBlockItem color='orange-light'>{'}'}</CodeBlockItem>
      </CodeBlockRoot>
    </TooltipProvider>
  )
}
