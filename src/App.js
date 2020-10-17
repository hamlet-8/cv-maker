import React from "react";
// import { browserHistory } from "react-router";
import { Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home/Home";
import TemplatesContainer from "./pages/Templates/TemplatesContainer";
import ContactContainer from "./pages/Contact/ContactContainer";
import ExperienceContainer from "./pages/Experience/ExperienceContainer";
import EducationContainer from "./pages/Education/EducationContainer";
import SkillsContainer from "./pages/Skills/SkillsContainer";
import SummaryContainer from "./pages/Summary/SummaryContainer";
import YourResume from "./pages/YourResume/YourResume";
// import Pdf from "./pages/YourResume/pdf.txt";

// import YourResumeList from "./pages/YourResume/YourResumeList";

function App() {
  return (
    <div>
      {/* <button onClick={browserHistory.goBack}>Go Back</button> */}
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/templates"} component={TemplatesContainer} />
        <Route path={"/contact"} component={ContactContainer} />
        <Route path={"/experience"} component={ExperienceContainer} />
        <Route path={"/education"} component={EducationContainer} />
        <Route path={"/skills"} component={SkillsContainer} />
        <Route path={"/summary"} component={SummaryContainer} />
        <Route path={"/your-resume"} component={YourResume} />
        {/* <Route path={"/pdf"} component={Pdf} /> */}

        {/* <Route path={"/your-resume-list"} component={YourResumeList} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
