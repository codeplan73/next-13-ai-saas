import { Button } from '@/components/ui/button'

const DashboardPage = () => {
  return (
    <>
      <p className="text-6xl text-green-500">Dashboard (Protected)</p>
      <Button variant="destructive" size="sm">
        Click Me
      </Button>
    </>
  )
}

export default DashboardPage
