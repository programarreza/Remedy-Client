import { Avatar, Table } from 'flowbite-react';



const FeaturedBlogsCard = ({topBlog, index}) => {
  const{title, userName, userProfile } = topBlog;
  console.log(userProfile);

  return (
    <div>
      <Table className="">
        <Table.Body className="divide-y mb-12">
          <Table.Row className="bg-white mb-12 dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap w-24 font-medium text-gray-900 dark:text-white">
              {index}
            </Table.Cell>
            <Table.Cell className="w-[300px]"> <Avatar img={userProfile} alt="avatar of Jese" rounded /></Table.Cell>
            <Table.Cell className="w-[300px] text-center">{userName}</Table.Cell>
            <Table.Cell className="[400px]">{title}</Table.Cell>
            
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default FeaturedBlogsCard;

