import { Avatar, Table } from 'flowbite-react';



const FeaturedBlogsCard = ({topBlog, index}) => {
  const{title, userName, userProfile } = topBlog;
  console.log(userProfile);

  return (
    <div className='mt-0.5 '>
      <Table className="text-white">
        <Table.Body className="divide-y mb-12 ">
          <Table.Row className="bg-[#081b29] mb-12 dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap w-24 font-medium  dark:text-white">
              {index + 1}
            </Table.Cell>
            <Table.Cell className="w-[100px] lg:w-[300px]"> <Avatar img={userProfile} alt="avatar of Jese" rounded /></Table.Cell>
            <Table.Cell className="lg:w-[300px] text-center">{userName}</Table.Cell>
            <Table.Cell className="lg:[400px]">{title}</Table.Cell>
            
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default FeaturedBlogsCard;

