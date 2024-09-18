import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profileImg } from "@/public/assets";


const About = () => {
  return (
    <section 
    id="about"
    className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
    <SectionTitle title="About Me" titleNo="01" />
    <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium font-titleFont flex flex-col gap-4">
            <p>
            Hello! My name is Indupalli Sishir Anand and I have lots of interest in Bioinformatics.
            Throughout my studies, I have engaged in several research projects, focusing  
            on <span className="text-textGreen">bioinformatics tools</span>.
            </p>
            <p>
            My passion for bioinformatics extends beyond the classroom, as I am constantly exploring innovative 
            ways to integrate computational methods with biological research. I am particularly fascinated by 
            the potential of bioinformatics to advance our understanding of <span className="text-textGreen">genomics, proteomics, and personalized 
            medicine.</span>
            </p>
            <p>
            I am eager to contribute to cutting-edge <span className="text-textGreen">research and development in bioinformatics</span>, leveraging my 
            skills and knowledge to drive scientific discoveries and technological advancements.
            </p>
            <p>Here are the few Technologies im working with:</p>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-col-2 grid-cols-2 gap-2 mt-6">
                <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>Python
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>AI/ML/DL
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>BLAST
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>HMMER
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>MongoDB
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>R
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>Next.Js
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>TailwindCSS
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen"><AiFillThunderbolt /></span>Typescript
                </li>
            </ul>
        </div>
        <div>
            <div>
                <div>
                    <Image className="rounded-lg h-full object-cover"
                     src={profileImg}
                     alt="profile image" />
                </div>
            
            </div>
        </div>
    </div>

    </section>
  )
}

export default About