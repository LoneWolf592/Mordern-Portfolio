import { Code2, Lightbulb, Rocket, Users } from "lucide-react";


const highlights = [
{
    icon: Code2,
    title:"Clean Code",
    description:"Write maintainable, scalable code using modern best practices, ensuring long-term project growth and readability."
},
{
    icon: Rocket,
    title:"Fast Performance",
    description:"Optimize applications with efficient queries, API design, and frontend performance improvements."
},
{
    icon: Users,
    title:"User-Centric Design",
    description:"Build intuitive interfaces focused on usability and accessibility for real-world users."
},
{
    icon: Lightbulb,
    title:"Innovative Solutions",
    description:"Develop full-stack applications that solve practical business and user needs."
}
];


export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*Left Column*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the Future,
                        <span className="font-serif italic font-normal text-white"> One Line of Code at a Time.</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                        I'm a full-stack software developer with a strong foundation in React, TypeScript, Node.js, and modern web technologies. I recently graduated with a degree in Computer Science and gained hands-on industry experience as a Software Development Intern at ArcZen, where I built features for a real-world attendance tracking platform.</p>
                        <p>
                        I enjoy developing scalable applications, designing clean APIs, and creating intuitive user experiences. My work focuses on building practical solutions, from full-stack web apps to real-world business platforms. I'm currently seeking entry-level full-stack opportunities where I can continue growing while contributing to meaningful products.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My mission is to build scalable, user-focused software that solves real-world problems and delivers meaningful experiences."
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