namespace curtbrock.Models
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class DefaultData : DbContext
    {
        // Your context has been configured to use a 'DefaultData' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'curtbrock.Models.DefaultData' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'DefaultData' 
        // connection string in the application configuration file.
        public DefaultData()
            : base("name=DefaultData")
        {
        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        public virtual DbSet<Subscriber> Subscribers { get; set; }
    }

    public class Subscriber
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Company { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
    }
}