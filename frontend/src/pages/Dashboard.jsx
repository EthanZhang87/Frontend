import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Link } from 'react-router-dom';

// TODO: Add logic to fetch user's analytics data and create a page (slug) for each analytic entry

const Dashboard = () => {
  const [analytics, setAnalytics] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    // TODO: Fetch user's analytics data
    // setAnalytics(fetchedData);
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('video', file);

    try {
      const response = await fetch('/api/upload-video/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // TODO: Handle successful upload
      } else {
        // TODO: Handle upload error
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className="p-6 font-Inter">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Previous Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart width={600} height={300} data={analytics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upload Video for Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="mb-4"
          />
          <Button onClick={handleUpload} disabled={!file}>
            <Upload className="mr-2 h-4 w-4" /> Upload Video
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;