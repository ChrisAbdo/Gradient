import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const navigation = [
  {
    name: "GitHub",
    href: "https://www.github.com/chrisabdo",
    icon: GitHubLogoIcon,
  },
  {
    name: "Twitter",
    href: "https://www.twitter.com/abdo_eth",
    icon: TwitterLogoIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/christopher-abdo/",
    icon: LinkedInLogoIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              rel="noopener noreferrer"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            Built with ❤️ by{" "}
            <a
              href="https://chrisabdo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark hover:underline"
            >
              Chris Abdo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
