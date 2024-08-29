export function Skeleton({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${className} animate-pulse dark:bg-[#0000005f] bg-gray-200 `}
      {...props}
    />
  )
}
 
