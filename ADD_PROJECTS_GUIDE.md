# Adding Your Portfolio Projects

This guide shows you how to add your actual projects from my_portfolio to the 3d-portfolio showcase section.

## Step 1: Copy Project Images

Copy your project images from my_portfolio to 3d-portfolio:

```bash
# From the joint directory, run:
cp my_portfolio/src/assets/project*.* 3d-portfolio/public/images/projects/
```

Or manually copy:
- project1.png through project14.png
- From: `my_portfolio/src/assets/`
- To: `3d-portfolio/public/images/projects/` (create the folder if it doesn't exist)

## Step 2: Update the constants file

Add a new `projects` array in `3d-portfolio/src/constants/index.js`:

```javascript
const projects = [
  {
    id: 1,
    title: "Landmark Citizen App",
    description: "E-commerce mobile application built with Flutter for Landmark Africa, featuring real-time features and hotel booking.",
    imgPath: "/images/projects/project1.png",
    technologies: ["Flutter", "Firebase", "REST API"],
    link: "#", // Add your project link
    category: "Mobile App"
  },
  {
    id: 2,
    title: "Hotel Management System",
    description: "Web application for hotel booking and management built with Vue and Laravel.",
    imgPath: "/images/projects/project2.png",
    technologies: ["Vue", "Laravel", "MySQL"],
    link: "#",
    category: "Web App"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React frontend and Laravel backend.",
    imgPath: "/images/projects/project3.png",
    technologies: ["React", "Laravel", "Tailwind"],
    link: "#",
    category: "Web App"
  },
  // Add more projects as needed
];

// Don't forget to export it
export {
  // ... existing exports
  projects,
};
```

## Step 3: Update ShowcaseSection Component

Update `3d-portfolio/src/sections/ShowcaseSection.jsx` to use your projects:

```jsx
import { projects } from "../constants";
import TitleHeader from "../components/TitleHeader";

const ShowcaseSection = () => {
  return (
    <section id="work" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Portfolio"
          sub="💼 Featured Projects & Work 🚀"
        />
        <div className="grid-3-cols mt-16">
          {projects.map((project) => (
            <div key={project.id} className="card-border rounded-xl overflow-hidden group hover:scale-105 transition-transform">
              <img 
                src={project.imgPath} 
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <span className="text-blue-50 text-sm">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-white-50 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-black-200 px-3 py-1 rounded-full text-xs text-white-50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link !== "#" && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-50 hover:underline"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
```

## Step 4: Create Projects Data from my_portfolio

Based on your my_portfolio assets, you have 14 projects. Here's a template to fill in:

```javascript
const projects = [
  {
    id: 1,
    title: "[Your Project Name]",
    description: "[Brief description of what you built]",
    imgPath: "/images/projects/project1.png",
    technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
    link: "[GitHub/Live URL or #]",
    category: "[Mobile App/Web App/Desktop App]"
  },
  // Repeat for all 14 projects using project1.png through project14.png
];
```

## Step 5: Add Filter Functionality (Optional)

You can add category filters to your portfolio:

```jsx
const [activeFilter, setActiveFilter] = useState("All");
const categories = ["All", "Mobile App", "Web App", "Desktop App"];

const filteredProjects = activeFilter === "All" 
  ? projects 
  : projects.filter(p => p.category === activeFilter);

// In your JSX:
<div className="flex gap-4 mb-8 justify-center">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setActiveFilter(category)}
      className={`px-6 py-2 rounded-full ${
        activeFilter === category 
          ? 'bg-blue-50 text-black' 
          : 'bg-black-200 text-white-50'
      }`}
    >
      {category}
    </button>
  ))}
</div>

{filteredProjects.map((project) => (
  // Project card JSX
))}
```

## Tips

1. **Image Optimization**: Compress your project images before adding them (aim for < 500KB each)
2. **Consistent Sizes**: Try to crop images to similar aspect ratios (16:9 or 4:3)
3. **Descriptions**: Keep descriptions concise (2-3 sentences max)
4. **Technologies**: List 3-5 main technologies per project
5. **Links**: Add GitHub repos or live demo links when available

## Example Full Project Entry

```javascript
{
  id: 1,
  title: "Landmark Citizen Mobile App",
  description: "A comprehensive e-commerce and hotel booking mobile application serving thousands of users across Nigeria. Features include real-time notifications, payment integration, and user management.",
  imgPath: "/images/projects/project1.png",
  technologies: ["Flutter", "Dart", "Firebase", "REST API", "GetX"],
  link: "https://play.google.com/store/apps/...", // or GitHub URL
  category: "Mobile App"
}
```
