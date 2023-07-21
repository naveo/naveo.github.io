'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import data from '../data/faq.json';

function Generator() {
  return data.map((item) => {
    return (
      <div
        key={item.question}
        className="mx-auto w-full bg-slate-200 dark:bg-slate-950 p-2"
      >
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded bg-slate-500 dark:bg-slate-800 px-4 py-2 text-left text-sm text-slate-200 hover:bg-slate-700 focus:outline-none">
                <span>{item.question}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-slate-400`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-900 dark:text-slate-400">
                {item.answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    );
  });
}

export default function FAQ() {
  return (
    <div id="faq">
      <Generator />
    </div>
  );
}
