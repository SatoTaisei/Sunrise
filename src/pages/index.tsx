import { client } from "@/libs/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import type { NextPage, GetStaticProps } from "next";
import type { Menu } from "@/types/menu";

const Home: NextPage<{ menuList: Menu[] }> = ({ menuList }) => {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen my-8 mx-auto">
        <p className="text-center font-bold text-xl">- MENU -</p>
        <ul className="w-6/12 mx-auto">
          {menuList.map((menu) => (
            <div key={menu.id} className="my-4">
              <p className="text-sm text-neutral-500">{menu.message}</p>
              <p className="font-bold text-2xl">{menu.name}</p>
              <span>{menu.category}</span>
            </div>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client
    .get({
      endpoint: "menu",
    })
    .then((res) => res)
    .catch(() => null);

  return { props: { menuList: data.contents } };
};
