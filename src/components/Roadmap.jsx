import Section from './Section'
import Heading from './Heading'

import {roadmap} from '../constants'
import {grid} from '../assets'
import {check2 , loading1} from '../assets'
import TagLine from './Tagline'

import Button from './Button'

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
        <div className="container md:pb-10">
            <Heading 
               tag="Ready to get started"
               title="What we're working on"
            />

            <div className="relative gap-6 grid md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {roadmap.map((item) => {
                    const status = item.status === 'done' ? 'Done' : 'In progress';

                    return (
                        <div key={item.id} className={`md:flex even:md:translate-y-[7rem]  border-n-8 p-0.25 rounded-[2.5rem] ${item.colorful ? 'bg-conic-gradient' : 'bg-n-6' } `}>
                            <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15">
                                <div className="absolute top-0 left-0 max-w-full">
                                    <img 
                                        src={grid}
                                        className="w-full"
                                        width={550}
                                        height={550}
                                        alt="Grid"
                                    />
                                </div>

                                <div className="relative z-1">
                                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                        <TagLine>{item.date}</TagLine>


                                        <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                            <img 
                                                className="mr-2.5"
                                                width={16}
                                                height={16}
                                                src={item.status === 'done' ? check2 : loading1}
                                                alt={status}
                                            />

                                            <div className="tagline">{status}</div>
                                        </div>
                                    </div>

                                    <div className="mb-10 -my-10 -mx-15r">
                                        <img 
                                            className="w-full"
                                            src={item.imageUrl}
                                            width={620}
                                            height={420}
                                            alt={item.title}
                                        />
                                    </div>

                                    <h4 className="h4 mb-4">{item.title}</h4>
                                    <p className="body-2 text-n-4">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <Button className="md:translate-x-[35rem] md:flex hidden mt-[4rem]">
               Our Roadmap
            </Button>
        </div>
    </Section>
  )
}



export default Roadmap