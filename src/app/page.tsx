import Icon, { iconNames } from './components/Icon';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-50 dark:bg-gray-950">
      <div className="flex justify-center items-center w-full max-w-3xl gap-6 flex-wrap">
        {iconNames.map(name => (
          <Icon
            key={`icon ${name}`}
            name={name}
            className="text-violet-700 dark:text-violet-500 w-10 h-10"
          />
        ))}
      </div>
    </main>
  );
}
