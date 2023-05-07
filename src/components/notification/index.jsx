export function Notification ({ children, status }) {
  return (
    <div className={` w-[400px] text-white rounded-md absolute bottom-8 right-4 px-3 py-6 text-center ${status === 'success' ? 'bg-[#918cf2]' : 'bg-[#ea5757]'}`}>
      {children}
    </div>
  )
}
