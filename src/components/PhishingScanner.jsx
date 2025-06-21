import { useState } from 'react';
import { Tab } from '@headlessui/react';
import UrlScanner from './UrlScanner';
import MessageScanner from './MessageScanner';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PhishingScanner() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <h2 className="text-2xl font-semibold text-indigo-800 mb-6">Phishing URL Scanner</h2>
        
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex rounded-xl bg-indigo-100 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-3 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow text-indigo-700'
                    : 'text-indigo-600 hover:bg-white/[0.12] hover:text-indigo-700'
                )
              }
            >
              Check a URL
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-3 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow text-indigo-700'
                    : 'text-indigo-600 hover:bg-white/[0.12] hover:text-indigo-700'
                )
              }
            >
              Scan Email/Text
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-6">
            <Tab.Panel>
              <div className="w-full">
                <UrlScanner />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="w-full">
                <MessageScanner />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        
        <div className="mt-6 text-xs text-gray-500 border-t pt-4">
          <p className="mb-1">This tool allows you to:</p>
          <ul className="list-disc list-inside space-y-1 ml-1">
            <li>Check any URL against a community-maintained phishing database</li>
            <li>Upload emails or text messages and automatically scan all URLs they contain</li>
            <li>Get clear guidance when malicious URLs are detected</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
