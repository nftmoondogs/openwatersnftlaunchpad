import Link from "next/link";
import CardHover from "@components/cardHover";
import ProjectCardStyleWrapper from "./ProjectCard.style";
import Button from "@components/button";

const ProjectCard = ({
  thumb,
  title,
  price,
  saleEnd,
  coinIcon,
  projectDetails,
  socialLinks,
}) => {
  return (
    <Link href="/projects-details-1" >
    <ProjectCardStyleWrapper className="project_item_wrapper">
    
      <div className="project-info d-flex">
        <Link href="/projects-details-1" >
          <img src={thumb.src} alt="project thumb" />
        </Link>
        <div className="project-auother">
          <h4 className="mb-10">
            <Link href="/projects-details-1">
              {title}
            </Link>
          </h4>
          <Link href="/projects-details-1">
          <div className="dsc">PRICE = {price}</div>
          </Link>
        </div>
      </div>

      <div className="project-content">
        
        <div className="project-header d-flex justify-content-between align-items-center">
      <Link href="/projects-details-1">

          <div className="heading-title">

            <h4>{saleEnd} Days Left</h4>
        
          </div>
          </Link>
          <div className="project-icon">
          <Link href="/projects-details-1">
            <img src={coinIcon.src} alt="coin icon" />
            </Link>
          </div>
        </div>

        
        <ul className="project-listing">
          {projectDetails?.map((item, i) => (
            <li key={i}>
              {item.title} <span>{item.text}</span>
            </li>
          ))}
        </ul>



        <div className="social-links">
          {socialLinks?.map((profile, i) => (
            <Link key={i} href={profile.url}>
              <img src={profile.icon.src} alt="social icon" />
            </Link>
          ))}
        </div>
      </div>



    
      <Link href="/projects-details-1" >
      <CardHover />
      </Link>

      
    </ProjectCardStyleWrapper>
      </Link>

  );
};

export default ProjectCard;
