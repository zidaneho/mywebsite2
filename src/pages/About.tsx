import NavBar from "../components/NavBar";
import myselfLoLPark from "../assets/myself-LoLPark.png"

function About() {
  return (
    <div className="flex flex-col w-full h-full mt-4 items-center">
      <NavBar includeHome={true}></NavBar>
      <div className="flex w-[90%] p-10 gap-12">
        <img src={myselfLoLPark} className="w-80"></img>
        <div className="flex flex-col gap-4">
          <p className="text-xl">Hello!</p>
          <p className="text-lg">My name is Zidane Ho and I'm currently studying for my B.S of Computer Science at UC San Diego. On my spare time, you'd find me building personal coding projects, going out to eat delicious food, or playing videogames with friends. I enjoy working with other like-minded people, so please feel free to contact me.</p>
        </div>
      </div>
    </div>
  );
}
export default About;
