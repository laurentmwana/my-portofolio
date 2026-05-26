"use client";

type Props = { children: React.ReactNode };

const HomeLayout = ({ children }: Props) => {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">{children}</main>
  );
};

export default HomeLayout;
