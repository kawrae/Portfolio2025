import './FocusAreas.css';
 
 import Header from '../../layouts/header/Header';
 import { FocusCardSmall, FocusCardLarge } from '../../common/card/focus/FocusCard';
 
 import consultingIcon from '../../../assets/icons/chat.svg';
 import arVrIcon from '../../../assets/icons/arrow.svg';
 import digitalTwinIcon from '../../../assets/icons/cube_scan.svg';
 import maintenanceIcon from '../../../assets/icons/setting.svg';
 import dataIntegrationIcon from '../../../assets/icons/pie.svg';
 import unityAssetIcon from '../../../assets/icons/box.svg';
 import webGamesIcon from '../../../assets/icons/gameboy.svg';
 import trainingIcon from '../../../assets/icons/task_square.svg';
 
 import arVrImage from '../../../assets/images/showcase/plant_vr_screenshot_01.png';
 import digitalTwinImage from '../../../assets/images/showcase/pipelinesentry_2.png';
 import webGamesImage from '../../../assets/images/showcase/ultra_series_3.PNG';
 import unityAssetImage from '../../../assets/images/showcase/persona_character_forge.png';
 
 const FocusAreas = () => {
     return (
         <div className="focus-area-section">
             <Header 
                 titleBeforeBold={"Services for"}
                 boldTitle={"every need"}
                 description={"From immersive AR experiences to full-scale digital twin implementations, we offer a broad range of services designed to meet diverse needs for businesses and developers alike."}
             />
             <div className="focus-area-grid">
                 <div className="focus-area-card-content">
                     <div className="focus-area-card-content-column">
                         <FocusCardSmall 
                             icon={consultingIcon}
                             title={"Consulting & Strategy"}
                             description={"Let us help you define a roadmap for integrating AR or digital twins into your business operations."}
                         />
                         <FocusCardLarge 
                             icon={digitalTwinIcon}
                             title={"Digital Twin Implementation"}
                             description={"We specialise in creating real-time representations of physical assets, optimising your operations."}
                             image={digitalTwinImage}
                         />
                     </div>
                     <div className="focus-area-card-content-column">
                         <FocusCardLarge 
                             icon={arVrIcon}
                             title={"Custom AR & VR Development"}
                             description={"We build interactive, immersive applications tailored to your unique business needs."}
                             image={arVrImage}
                         />
                         <FocusCardSmall 
                             icon={maintenanceIcon}
                             title={"Maintenance & Support"}
                             description={"Ensure your systems run seamlessly with our ongoing maintenance and support services."}
                         />
                     </div>
                 </div>
                 <div className="focus-area-card-content">
                     <div className="focus-area-card-content-column">
                         <FocusCardSmall 
                             icon={dataIntegrationIcon}
                             title={"Data Integration & Insights"}
                             description={"Connect all your data sources into one system, providing real-time actionable insights."}
                         />
                         <FocusCardLarge 
                             icon={unityAssetIcon}
                             title={"Unity Asset Development"}
                             description={"We create custom Unity assets to streamline development and enhance user experience."}
                             image={unityAssetImage}
                         />
                     </div>
                     <div className="focus-area-card-content-column">
                         <FocusCardLarge 
                             icon={webGamesIcon}
                             title={"Websites, Games & Apps"}
                             description={"We build engaging websites, games, and apps that deliver results across multiple platforms."}
                             image={webGamesImage}
                         />
                         <FocusCardSmall 
                             icon={trainingIcon}
                             title={"Training & Documentation"}
                             description={"Equip your team with training and clear documentation for smooth project handovers."}
                         />
                     </div>
                 </div>
             </div>
         </div>
     );
 };
 
 export default FocusAreas;