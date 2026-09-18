using System.IO;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Microsoft.Web.WebView2.Core;

namespace WpfHostApp
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            HostPmsAppAsync();
        }
        private async Task HostPmsAppAsync()
        {
            //ensures that the underlying COM API which is used by the WebView2 with the rendering engine is initailized
            await pmsAppWebView.EnsureCoreWebView2Async();

            //access the underlying COM API
            //using the property CoreWebView2 of WebView2 control
            //now
            //if the COM API is not initialized properly, null will be returned to comApi variable
            CoreWebView2 comApi = pmsAppWebView
                .CoreWebView2;

            comApi.SetVirtualHostNameToFolderMapping(
            "siemens.com",
            $"{Environment.CurrentDirectory}//pms-app", CoreWebView2HostResourceAccessKind.DenyCors
            );

            pmsAppWebView.Source = new Uri("http://siemens.com/index.html");
        }
    }
}