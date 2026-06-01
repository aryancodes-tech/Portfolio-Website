// eslint-disable-next-line react/prop-types
const Tooltip = ({ text, children }) => {
  return (
    <div className="group relative inline-block">
      {children}
      <div className="absolute left-[10%] -translate-x-1/2 bottom-[calc(-100%+0px)] block">
        <div className="relative left-1/2 bg-gray-900 text-white text-sm py-2 px-4 rounded-lg whitespace-nowrap">
          {text}
          {/* Triangle pointer */}
          <div className="absolute -top-[16px] translate-x-1/2 border-8 border-transparent border-b-gray-900" />
        </div>
      </div>
    </div>
  )
}

export default Tooltip

