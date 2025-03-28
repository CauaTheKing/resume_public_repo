
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServerConnectionTester from '@/components/ServerConnectionTester';

const ServerTest = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-violet-600 sm:text-4xl">
              Server Connection Tester
            </h1>
            <p className="mt-3 text-xl text-gray-500">
              Test your connection to internal or external servers
            </p>
          </div>
          
          <ServerConnectionTester />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServerTest;
