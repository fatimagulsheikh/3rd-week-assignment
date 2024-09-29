'use client'
import ChildComponent from './child/ChildComponent';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push('/about');
  };

  const navigateToContact = () => {
    router.push('/contact');
  };

  return (
    <main>
      <h1>Welcome to the Home Page</h1>

      <ChildComponent
      title="Sir Asharib Ali"
      title1="3rd Assignment"
      description="Governor Sindh Initiative for GenAI, Web3, and Metaverse."
      />

    <ChildComponent
      title="Sir Naeem Hussain"
      title1="3rd Assignment"
      description="Governor Sindh Initiative for GenAI, Web3, and Metaverse."
      />

      <div>
        <button onClick={navigateToAbout}>Go to About Page</button>
        <button onClick={navigateToContact}>Go to Contact Page</button>
      </div>
      </main>
  );
}