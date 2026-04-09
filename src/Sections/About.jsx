import { Code2, Lightbulb, Rocket, Users } from "lucide-react";


const highlights = [
{
    icon: Code2,
    title:"Clean Code",
    description:"We write clean, maintainable code that follows industry best practices and standards. Our code is well-structured, easy to read, and thoroughly documented, ensuring that it can be easily understood and maintained by other developers."
},
{
    icon: Rocket,
    title:"Fast Performance",
    description:"Our applications are optimized for speed and efficiency, ensuring a smooth and responsive user experience. We leverage the latest technologies and best practices to deliver high-performance solutions that meet the demands of modern users."
},
{
    icon: Users,
    title:"User-Centric Design",
    description:"We prioritize the needs and preferences of our users in every aspect of our design process. Our user-centric approach ensures that our applications are intuitive, accessible, and provide a seamless experience that meets the expectations of our target audience."
},
{
    icon: Lightbulb,
    title:"Innovative Solutions",
    description:"We are committed to delivering innovative solutions that push the boundaries of what's possible. Our team is constantly exploring new technologies and approaches to create cutting-edge applications that solve complex problems and provide unique value to our users."
}
];


export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*Left Column*/}
                <div className="space-y-8">
                    <div className="aniamte-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tiught animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the Future,
                        <span className="font-serif italic font-normal text-white"> One Line of Code at a Time.</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                        I'm a passionate software developer with a knack for crafting elegant and efficient solutions. With a background in computer science and years of experience in the industry, I specialize in building scalable web applications that deliver exceptional user experiences. My expertise spans across various technologies, including JavaScript, React, Node.js, and more. I thrive on solving complex problems and am always eager to learn new technologies to stay at the forefront of the ever-evolving tech landscape.
                        </p>
                        <p>
                        When I'm not coding, you can find me exploring the latest trends in technology, contributing to open-source projects, or sharing my knowledge through tech blogs and community events. I believe in the power of collaboration and am always looking for opportunities to connect with like-minded individuals who share my passion for innovation and excellence in software development.
                        </p>
                        <p>
                        Whether it's building a new application from scratch or optimizing an existing one, I am committed to delivering high-quality solutions that exceed expectations. I am excited about the future of technology and am dedicated to being a part of shaping it through my work as a software developer.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-forground">
                            "My Mission: To Craft Innovative Software Solutions that Empower Users and Drive Digital Transformation."
                        </p>
                    </div>
                </div>

                {/*Right Column - Highlights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                        style={{animationDelay: `${(idx + 1) * 100 }ms`}}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>);
}