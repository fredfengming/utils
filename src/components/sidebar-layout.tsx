import BaseLayout from "./base-layout";
import LinkList, { LinkItem } from "./link-list";

type Props = {
  recentPostLinks: LinkItem[];
  utilLinks: LinkItem[];
  children: React.ReactNode;
};

const SidebarLayout = ({ children, recentPostLinks, utilLinks }: Props) => {
  return (
    <>
      <BaseLayout>
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-5 md:col-span-4">{children}</div>
          <div className="hidden md:col-span-1 md:block">
            <LinkList listName="Utilities" items={utilLinks} />
            <LinkList listName="Recent Posts" items={recentPostLinks} />
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default SidebarLayout;
