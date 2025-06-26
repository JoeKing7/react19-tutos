export const NoChatSelectedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 8h10M7 12h5m-4 8l-4-4H3a2 2 0 01-2-2V5a2 2 0 012-2h18a2 2 0 012 2v9a2 2 0 01-2 2h-5l-4 4z"
            />
          </svg>
        </div>
        <h1 className="mt-6 text-2xl font-semibold text-gray-800">
          No chat selected
        </h1>
        <p className="mt-2 text-gray-600 text-center">
          Select a chat to start a conversation
        </p>
      </div>
    </div>
  );
};

export default NoChatSelectedPage;
