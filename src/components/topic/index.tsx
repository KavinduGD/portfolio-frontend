interface TopicProps {
  topicName: string;
}

function Topic({ topicName }: TopicProps) {
  return (
    <div className="text-[#222222] font-bold text-[21px] pl-[20px] pt-[20px] pb-[20px] border-b-[1px] border-b-[#E0E0E0]">
      {topicName}
    </div>
  );
}

export default Topic;
