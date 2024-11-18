import './Dashboard.css';

function Dashboard() {
    return (
        <div className="landingPage">
    
          {/* Main Man Header */}
          <div className="landingPageMainHeader">
    
            <div className="mainHeaderNavigation">
               
            </div>
    
          </div>
    
          {/* Anything Header*/}
          <div className="landingPageHeader">
    
            <div className="titleContainer">
              <div className="title"> {/* Title */}
                Lorem Ispum
              </div>
    
              <div className="body"> {/* Body */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Faucibus in libero risus semper habitant arcu eget. 
              Et integer facilisi eget diam.Lorem ipsum dolor sit ame,consectetur 
              </div>
       
            </div>
    
          </div>
    
          {/* Anything Body*/}
          <div className="landingPageBody">
    
            <div className="navBox boxOne">
              <div className="title">
                Add New Asset
              </div>
            </div>
    
            <div className="navBox boxTwo">
              <div className="title">
                Update Asset
              </div>
            </div>
    
            <div className="navBox boxThree">
              <div className="title">
                Preview Asset
              </div>
            </div>
    
            <div className="navBox boxThree">
              <div className="title">
                Update Asset
              </div>
            </div>
    
          </div>
    
        </div>
        );
}

export default Dashboard;