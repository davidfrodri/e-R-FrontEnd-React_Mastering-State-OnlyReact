const Main = () => {
  return (
    <div id="main" className="main">
    <h2>This is the Section Headline,
        Continues to Two Lines</h2>
    <h3>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit sed do eiusmod.</h3>
    <div className="main__lorem">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.</p>
        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
     <button className="main__button-rotate3d" >Read more</button> {/* onClick="rotateButton()" */}
</div>
  )
}

export default Main