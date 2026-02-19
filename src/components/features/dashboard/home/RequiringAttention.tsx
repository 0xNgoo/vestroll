function RequiringAttention() {
  const attentions = [
    {
      name: "Contracts",
      attentions: 0,
    },
    {
      name: "Milestone",
      attentions: 3,
    },
    {
      name: "Invoices",
      attentions: 4,
    },
    {
      name: "Time off",
      attentions: 0,
    },
    {
      name: "Time tracking",
      attentions: 2,
    },
    {
      name: "Expense",
      attentions: 0,
    },
  ];
  return (
    <section className="sm:p-4 py-0 px-4 rounded-lg flex gap-2 sm:gap-4  flex-col sm:bg-white flex-1 dark:sm:bg-gray-900">
      <p className="text-base font-medium text-text-header leading-[120%] dark:text-gray-100">
        Requiring attention
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 ">
        {attentions.map((atn, index) => {
          return (
            <div
              className="rounded-lg p-4 bg-white sm:border-[#DCE0E5] sm:border flex items-center justify-between dark:bg-gray-900 dark:border-gray-800"
              key={index}
            >
              <p className="text-sm text-text-subtext font-medium dark:text-gray-400">
                {atn.name}
              </p>
              <span
                className={`${atn.attentions > 0 ? " text-primary-500" : "text-text-header dark:text-gray-200"} size-8 rounded-full flex items-center justify-center bg-[#F3EBF9] dark:bg-gray-800`}
              >
                {atn.attentions}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RequiringAttention;
