export const NoContactSelected = () => {
  return (
    <div className="w-80 border-l">
      <div className="h-14 border-b px-4 flex items-center">
        <h2 className="font-medium">Contact details</h2>
      </div>
      <div className="p-4 flex flex-col items-center">
        <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h11M9 21V3m12 7h-5m0 0l-3 3m3-3l-3-3"
            />
          </svg>
        </div>
        <h1 className="mt-6 text-2xl font-semibold text-gray-800">
          No contact selected
        </h1>
        <p className="mt-2 text-gray-600 text-center">
          Please select a contact to view their details and start a
          conversation.
        </p>
      </div>
    </div>
  );
};
