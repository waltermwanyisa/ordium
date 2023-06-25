import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing all the themes
import ThemeOne from "../themes/theme-one";
import Project from "../themes/project";
import ProjectOne from "../themes/project-one";
import ProjectTwo from "../themes/project-two";
import ProjectThree from "../themes/project-three";
import ProjectFour from "../themes/project-four";
import ProjectSingle from "../themes/project-single";
import StakingOne from "../themes/staking-one";
import StakingTwo from "../themes/staking-two";
import Farming from "../themes/farming";
import Leaderboard from "../themes/leaderboard";
import Apply from "../themes/apply";
import Wallet from "../themes/Walletconnect";
import HelpCenter from "../themes/help-center";
import Contact from "../themes/contact";
import Login from "../themes/login";
import Register from "../themes/register";
import Reset from "../themes/reset";
import Tokenomics from "../themes/tokenomics";
import Tier from "../themes/tier-system";
import Blog from "../themes/blog";
import BlogSingle from "../themes/blog-single";

function MyRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ThemeOne />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/project-one" element={<ProjectOne />} />
          <Route path="/project-two" element={<ProjectTwo />} />
          <Route path="/project-three" element={<ProjectThree />} />
          <Route path="/project-four" element={<ProjectFour />} />
          <Route path="/project-single" element={<ProjectSingle />} />
          <Route path="/project-single/:id" element={<ProjectSingle />} />
          <Route path="/staking-one" element={<StakingOne />} />
          <Route path="/staking-two" element={<StakingTwo />} />
          <Route path="/farming" element={<Farming />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/wallet-connect" element={<Wallet />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/tier-system" element={<Tier />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-single" element={<BlogSingle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyRoutes;