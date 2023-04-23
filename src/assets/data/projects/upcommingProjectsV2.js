import discord from "@assets/images/icons/discord.svg";
import linkedin from "@assets/images/icons/linkedin.svg";
import medium from "@assets/images/icons/medium.svg";
import telegram from "@assets/images/icons/telegram.svg";
import twitter from "@assets/images/icons/twitter.svg";

import projectThumb1 from "@assets/images/project/project-image.png";
import projectThumb2 from "@assets/images/project/project-image2.png";
import projectThumb3 from "@assets/images/project/project-image3.png";
import projectThumb4 from "@assets/images/project/project-image4.png";
import projectThumb5 from "@assets/images/project/project-image5.png";
import projectThumb6 from "@assets/images/project/project-image6.png";

import coinIcon1 from "@assets/images/project/project-single-image.png";
import coinIcon2 from "@assets/images/project/project-single-image2.png";
import coinIcon3 from "@assets/images/project/project-single-image3.png";
import coinIcon4 from "@assets/images/project/project-single-image4.png";
import coinIcon5 from "@assets/images/project/project-single-image5.png";
import coinIcon6 from "@assets/images/project/project-single-image6.png";

export default {
  data: [
    //  tab item
    {
      projectStatus: "On Going",
      projects: [
        // porject
        {
          thumb: projectThumb1,
          title: "CoreTokyo",
          price: "18 WOOF",
          saleEnd: "10",
          coinIcon: coinIcon2,
          projectDetails: [
            {
              title: "Total Supply",
              text: "9000",
            },
            {
              title: "Mint Date",
              text: "30 April 2023",
            },
            {
              title: "Mint Time",
              text: "5 pm UTC",
            },
        
          ],
          socialLinks: [
            {
              icon: telegram,
              url: "https://t.me/CoreTokyoGarden",
            },
          
            {
              icon: medium,
              url: "https://medium.com/@coretokyo",
            },
            {
              icon: twitter,
              url: "https://twitter.com/coretokyonft",
            },
          ],
        },

        {
          thumb: projectThumb1,
          title: "CoreTokyo",
          price: "0.69 CORE",
          saleEnd: "11",
          coinIcon: coinIcon1,
          projectDetails: [
            {
              title: "Total Supply",
              text: "9000",
            },
            {
              title: "Mint Date",
              text: "1 May 2023",
            },
            {
              title: "Mint Time",
              text: "5 pm UTC",
            },
        
          ],
          socialLinks: [
            {
              icon: telegram,
              url: "https://t.me/CoreTokyoGarden",
            },
           
            {
              icon: medium,
              url: "https://medium.com/@coretokyo",
            },
            {
              icon: twitter,
              url: "https://twitter.com/coretokyonft",
            },
          ],
        },
      ],
    },
    //  tab item
    {
      projectStatus: "Upcomming",
      projects: [
        // project

        {
          thumb: projectThumb1,
          title: "CoreTokyo",
          price: "18 WOOF",
          saleEnd: "10",
          coinIcon: coinIcon2,
          projectDetails: [
            {
              title: "Total Supply",
              text: "9000",
            },
            {
              title: "Mint Date",
              text: "30 April 2023",
            },
            {
              title: "Mint Time",
              text: "5 pm UTC",
            },
        
          ],
          socialLinks: [
            {
              icon: telegram,
              url: "https://t.me/CoreTokyoGarden",
            },
          
            {
              icon: medium,
              url: "https://medium.com/@coretokyo",
            },
            {
              icon: twitter,
              url: "https://twitter.com/coretokyonft",
            },
          ],
        },

        {
          thumb: projectThumb1,
          title: "CoreTokyo",
          price: "0.69 CORE",
          saleEnd: "11",
          coinIcon: coinIcon1,
          projectDetails: [
            {
              title: "Total Supply",
              text: "9000",
            },
            {
              title: "Mint Date",
              text: "1 May 2023",
            },
            {
              title: "Mint Time",
              text: "5 pm UTC",
            },
        
          ],
          socialLinks: [
            {
              icon: telegram,
              url: "https://t.me/CoreTokyoGarden",
            },
           
            {
              icon: medium,
              url: "https://medium.com/@coretokyo",
            },
            {
              icon: twitter,
              url: "https://twitter.com/coretokyonft",
            },
          ],
        },
       
      ],
    },
    //  tab item
    {
      projectStatus: "Ended",
      projects: [
        // project
       
      ],
    },
  ],
};
