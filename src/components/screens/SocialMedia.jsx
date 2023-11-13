import React from "react";
import Google from "../../assets/images/CircleButton.png";
import FaceBook from "../../assets/images/CircleButtonf.png";
import Linkidin from "../../assets/images/CircleButtonI.png";
import Twitter from "../../assets/images/CircleButtonT.png";

const SocialMedia = () => {
  const socialMediaIcons = [
    { name: "Google", src: Google },
    { name: "Facebook", src: FaceBook },
    { name: "LinkedIn", src: Linkidin },
    { name: "Twitter", src: Twitter },
  ];
  return (
    <>
      <ul className="list">
        {socialMediaIcons.map((icon, index) => (
          <li key={index}>
            <span>
              <img src={icon.src} alt={icon.name} />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SocialMedia;
