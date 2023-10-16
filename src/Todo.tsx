type TodoType = {
  userId: number;
  title: string;
  complited?: boolean;
};

export const Todo = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
