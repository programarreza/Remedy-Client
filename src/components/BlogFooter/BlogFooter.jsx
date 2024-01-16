import { Footer } from "flowbite-react";

const BlogFooter = () => {
  return (
    <div>
      <Footer container className="bg-[#081b29] text-white rounded-none">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
			<div className="flex items-center justify-normal gap-5">
				<img className="w-10" src="https://i.postimg.cc/k4RNH2Qm/Remedy.png" alt="" />
				<h2 className="text-xl">Remedy</h2>
			</div>
            <Footer.Brand />
            
            <Footer.LinkGroup className="text-white gap-10 md:gap-2  ">
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Remedy" year={2023} />
        </div>
      </Footer>
    </div>
  );
};

export default BlogFooter;
