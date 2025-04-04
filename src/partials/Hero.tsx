import React, {useState, useEffect} from 'react'

interface Phrase {
  text: String,
  gradient: string
}
interface Heading {
  text?: String,
  class?: string
}

interface HeroProps {
  phrases: Phrase[],
  intervalTime?: number,
  description: any,
  heading: Heading,
  chidren: any
}

const Hero: React.FC<HeroProps> = ({heading, phrases, description, intervaltime = 5000, children}) => {


  const [currentPhrase, setCurrentPhrase] = useState(0);
  const title = heading?.text ?? heading

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases?.length);
    }, intervaltime); // Change phrase every 5 seconds

    return () => clearInterval(interval);
  }, [phrases, intervaltime]);


  return (
  <div className="h-full">
    <h1 className={`${heading?.class ?? 'text-3xl'} font-bold`}>
      {title}
      {title && Array.isArray(phrases) ?
        <>
          {' '}
          <span className={`text-transparent bg-gradient-to-r ${phrases[currentPhrase].gradient} bg-clip-text`}>
            <span className="">{phrases[currentPhrase].text}</span>
          </span>
          {phrases[currentPhrase].text === "Viraj Bahulkar" ? <span className="wave">👋</span> : <></>}
        </> :
        <></>
      }
    </h1>
    <p className="mt-6 text-xl leading-9">
      {Array.isArray(description) ?
        <ul className="list-disc list-inside space-y-2  leading-relaxed marker:text-blue-500">
          {description.map((desc) => {
            if(desc.type === "quote") {
              return (<li className="list-none"><blockquote className={desc.class}>
                {desc.text}
              </blockquote></li>
              )
            }
            return (<li className={desc.class}>{desc.text}</li>)
          })}
        </ul>
       : description}
    </p>
    {children}
  </div>

)
};

export { Hero };
