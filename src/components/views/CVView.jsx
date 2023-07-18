import HeaderView from "./HeaderView";
import ContactView from "./ContactView";
import EduView from "./EduView";
import SkillsView from "./SkillsView";
import WorkView from "./WorkView";
import ProjectsView from "./ProjectsView";

function CVView() {
  return (
    <div className="cv-view">
      <HeaderView />

      <main className="content">
        <aside className="personal-info">
          <ContactView />

          <EduView />

          <SkillsView />
        </aside>

        <div className="work-info">
          <WorkView />
          <ProjectsView />
        </div>
      </main>
    </div>
  );
}

export default CVView;
