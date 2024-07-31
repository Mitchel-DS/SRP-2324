import styles from './ProjectsStyles.module.css';
import webflix from '../../assets/webflix.png';
import mitchel from '../../assets/mitchel.png';
import secretmenu from '../../assets/secretmenu.jpeg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={webflix}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Webflix"
          p="Streaming App"
        />
        <ProjectCard
          src={mitchel}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Portofolio v1.0"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={secretmenu}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Secret Menu"
          p="Vegan Restaurant"
        />
      </div>
    </section>
  );
}

export default Projects;
