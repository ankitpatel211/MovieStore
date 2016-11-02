namespace MoviesCollection.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MoviesCollection.MovieDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(MoviesCollection.MovieDb context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

           

            context.MoviesList.AddOrUpdate(m => m.Title,
                new Models.Movies
                {
                    Title = "Star Wars",
                    ReleaseYear = 1977,
                    Runtime = 121
                },
                new Models.Movies
                {
                    Title = "Inception",
                    ReleaseYear = 2010,
                    Runtime = 148
                },
                new Models.Movies
                {
                    Title = "Toy Story",
                    ReleaseYear = 1995,
                    Runtime = 81
                }
                );
        }
    }
}
