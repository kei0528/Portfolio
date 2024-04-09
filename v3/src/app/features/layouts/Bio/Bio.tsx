import { type JSX } from 'react'

import { Headline } from '../../uis/Headline'
import { TimelineItem, TimelineRoot } from '../../uis/Timeline'
import { TIMELINE_ITEMS } from './Bio.statics'

export const Bio = (): JSX.Element => {
  return (
    <section>
      <Headline>## Bio</Headline>
      <TimelineRoot>
        {TIMELINE_ITEMS.map(({ title, date, description, image }) => (
          <TimelineItem
            title={title}
            date={date}
            description={description}
            image={image}
            key={title}
          />
        ))}
      </TimelineRoot>
    </section>
  )
}
