import FeatureCard from "../../components/feature/FeatureCard";
import Posts from "../../components/posts/Posts";
import Cards from "../../components/card/Cards";
import CardCarosal from "../../components/cardCarosal/CardCarosal";
import Carosal from "../../components/carosal/Carosal";
import Slide from "../../components/slider/Slide";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <FeatureCard />
        <Posts
          title="mango herbs store"
          paragr="Life Changing Ayurvedic Products."
          img="https://werstupid.netlify.app/images/logo_mango_herbs.png"
        />
        <Cards
          heading="Featured Videos"
          imag="https://werstupid.netlify.app/images/youtube_thumbnail_1.jpg"
          img="https://werstupid.netlify.app/images/youtube_thumbnail_2.png"
          image="https://werstupid.netlify.app/images/youtube_thumbnail_3.jpg"
          title="How much protien do you actually need?"
          titles="There is no supplement stack for beginners"
          titless="German Volume Training - Most Powerful Workout"
          button="play now"
          btn="play now"
          bttn="play now"
        />

        <CardCarosal />
        <Carosal
          title="india's most extensive"
          para="personalized online training program"
          paragraph="6 months of intense training under the finest coatching & dieticions hand picked by akshay chopda"
          button="know more"
        />
        <Slide />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
