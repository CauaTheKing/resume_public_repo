
import React, { useState } from 'react';
import { testServerConnection, type ConnectionTestResult } from '@/lib/serverConnection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

const ServerConnectionTester = () => {
  const [serverUrl, setServerUrl] = useState('http://localhost:3000');
  const [isLoading, setIsLoading] = useState(false);
  const [testResult, setTestResult] = useState<ConnectionTestResult | null>(null);
  const { toast } = useToast();

  const handleTestConnection = async () => {
    if (!serverUrl) {
      toast({
        title: "Error",
        description: "Please enter a server URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await testServerConnection(serverUrl);
      setTestResult(result);
      
      toast({
        title: result.success ? "Connection Successful" : "Connection Failed",
        description: result.message,
        variant: result.success ? "default" : "destructive",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to test connection: ${error instanceof Error ? error.message : String(error)}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Test Server Connection</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            value={serverUrl}
            onChange={(e) => setServerUrl(e.target.value)}
            placeholder="Enter server URL"
            className="flex-1"
          />
          <Button 
            onClick={handleTestConnection}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Testing...
              </>
            ) : (
              'Test Connection'
            )}
          </Button>
        </div>
        
        {testResult && (
          <div className={`mt-4 p-4 rounded ${testResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="font-semibold mb-1">
              {testResult.success ? 'Connection Successful' : 'Connection Failed'}
            </div>
            <div className="text-sm">{testResult.message}</div>
            <div className="text-xs text-gray-500 mt-1">
              {new Date(testResult.timestamp).toLocaleString()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServerConnectionTester;
