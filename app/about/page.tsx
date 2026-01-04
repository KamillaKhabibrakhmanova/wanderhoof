import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="content-container-narrow">
        <article className="max-w-none text-lg md:text-xl text-deepgreen/70 leading-relaxed">
          <h1 className="page-title text-center">
            About Wanderhoof
          </h1>

          <div className="float-right ml-6 mb-6 w-full md:w-[45%] max-w-md">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/profile2.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="section-title mt-12">
            How I Almost Got Stranded in Kazakhstan (And Why I Started This Blog)
          </h2>

          <p className="mb-4">
            Picture this: I'm standing on a dusty road in a tiny village outside Almaty, the sun setting fast, and my host, who had promised me I could "easily get an Uber back to town after the ride," has disappeared. My phone has barely any signal, it's getting really chilly, and the roads aren't even safe enough to walk back to my Airbnb, which would take all night anyway.
          </p>

          <p className="mb-4">
            That's when it hit me: horse trips are too expensive, too precious, and too hard to come by to leave to chance and the promise of a business dealer.
          </p>

          <h2 className="section-title mt-12">
            The Long Way Back to Horses
          </h2>

          <p className="mb-4">
            I fell in love with horses when I was ten on a homeschool activity trip. It was instant, all-consuming, the kind of love where I spent every spare minute either at the barn or with my nose buried in every horse book I could find. For six years, horses were my entire world.
          </p>

          <p className="mb-4">
            Then we moved to Long Island. No public transportation to barns. Lessons that cost more than my family could justify. I was sixteen and heartbroken, so I did what any devastated horse girl does: I tried to pretend horses didn't exist.
          </p>

          <p className="mb-4">
            That worked for 20 years. I went to a good college, grew disillusioned with a few career paths, learned a bunch of foreign languages, and travelled whenever I got a chance. I love the feeling of landing somewhere new or somewhere I just haven't been in a while, trying out the foreign language phrases in real life, trying out new things I couldn't do at home.
          </p>

          <p className="mb-4">
            Fast forward to the pandemic. Finally, having found my footing in my career, I was researching the next steps expected from a 30s career girl - co-ops and daycare costs - while uninspired by all of it. I started <em>The Artist's Way</em>, and many of the exercises centered on what excited me as a child. Horses came flooding back—all those feelings I'd buried. One day, I decided to just tour some barns near my parents' house. And now? I live in Manhattan, ride once a week on Long Island, and spend an embarrassing amount of time scheming about how to get more saddle time during my vacations.
          </p>

          <h2 className="section-title mt-12">
            The Mexico Trip That Changed Everything
          </h2>

          <div className="my-8 md:my-12 not-prose">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/profile1.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="mb-4">
            My first real horse trip was to a ranch in Mexico. I wasn't looking for anything fancy—I just wanted hours in the saddle because I felt rusty in a way that only lots of riding could fix. I found a ranch that fit my budget and sent over my savings account.
          </p>

          <p className="mb-4">
            It was revelatory.
          </p>

          <p className="mb-4">
            Here I was, exploring a completely new region on horseback, meeting fellow horse lovers from around the world, feeling like I was in a movie, and getting that deep saddle time I'd been craving. For a city girl with no realistic path to owning a horse, this felt like the answer I didn't know I was looking for.
          </p>

          <p className="mb-4">
            But here's the thing: I've also been on the other kind of trip. The Georgia day ride, where the horses were painfully underfed, and the guide was clearly running a scam. The Kazakhstan near-stranding. The experiences that make you think, "I just spent HOW much money on this?"
          </p>

          <p className="mb-4">
            Horse trips are staggeringly expensive. A week-long riding vacation can easily cost several thousand dollars. And when you're someone like me, with a good job that allows for travel but definitely not a trust fund, you can't afford to get it wrong.
          </p>

          <h2 className="section-title mt-12">
            What Wanderhoof Is All About
          </h2>

          <p className="mb-4">
            This blog is for the riders who want to explore the world on horseback but also need to have a job and follow a budget.
          </p>

          <p className="mb-4">
            I'm here to share:
          </p>

          <ul className="mb-4 space-y-2">
            <li><strong>Honest reviews</strong> of horse trips around the world—the magical ones AND the disasters to help you decide if it's worth your hard-earned money</li>
            <li><strong>Real budget breakdowns</strong> from someone who flies economy and mixes Airbnbs with the occasional splurge hotel</li>
            <li><strong>Practical tips</strong> for maximizing your precious vacation days and dollars</li>
            <li><strong>What's actually worth it</strong> when you're choosing between trips</li>
          </ul>

          <p className="mb-4">
            I'm not a trust fund traveler. I don't have unlimited time off. I can't afford luxury everything. But I can afford to be strategic, do my research, and share what I learn so you don't have to learn it the hard way.
          </p>

          <h2 className="text-2xl md:text-3xl font-fraunces text-terracotta mt-12 mb-4 clear-both">
            Let's Explore Together
          </h2>

          <div className="float-left mr-6 mb-6 w-full md:w-[45%] max-w-md">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/profile3.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="mb-4">
            Whether you're horse-deprived like me, looking for your next riding adventure, or just trying to figure out if that ranch in Patagonia is worth the splurge—I'm so glad you're here.
          </p>

          <p className="mb-4">
            Let's make every horse trip count.
          </p>

          <p className="text-deepgreen leading-relaxed mt-8 italic clear-both">
            — Kamilla K
          </p>
        </article>
      </div>
    </main>
  );
}
