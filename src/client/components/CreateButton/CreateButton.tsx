export const CreateButton = (props: {
  handleCreateButtonClick?: (e: React.MouseEvent) => void;
  route?: string;
}) => {
  return (
    <button
      onClick={(e) => console.log("CreateButton", e)}
      className="bg-gray-300 text-gray-800 rounded-md p-2"
    >
      Create
    </button>
  );
};
