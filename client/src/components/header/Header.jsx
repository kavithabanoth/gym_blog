import "./header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Gymso Fitness</span>
        </div>
        <img
         className="headerImg" 
         src="https://static.toiimg.com/photo/msid-90017973/90017973.jpg?80686 " 
         alt="" 
         />

    </div>
  );
}
